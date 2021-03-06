import './index.css';
import { Card } from '../javascript/Card.js';
import { UserInfo } from '../javascript/UserInfo.js';
import { Section } from '../javascript/Section.js';
import { PopupWithImage } from '../javascript/PopupWithImage.js';
import { PopupWithForm } from '../javascript/PopupWithForm.js';
import { API } from '../javascript/Api.js';
import { PopupWithConfirmation } from '../javascript/PopupWithConfirmation.js';
import { FormValidator } from '../javascript/FormValidator.js';
import { validationOptions, apiConfig} from '../javascript/Utils.js';


const editProfileButton = document.querySelector('.profile__edit-button');

export const api = new API (apiConfig);

function createFormValidator(validationOptions, popupForm){
    return new FormValidator (validationOptions, popupForm);
} 

const profileInfo = new UserInfo ('.profile__name', '.profile__profession', '.profile__image');

const profilePopup = new PopupWithForm ('.popup_profile', onSubmitProfilePopupForm, validationOptions, createFormValidator);

const profileAvatarPopup = new PopupWithForm ('.popup_avatar', onSubmitAvatarPopupForm, validationOptions, createFormValidator);

const picturePopup = new PopupWithImage ('.popup_picture');

const deleteCardPopup = new PopupWithConfirmation('.popup_check');

const editAvatarButton = document.querySelector('.profile__image');

const addCardButton = document.querySelector('.profile__add-button');

const addCardPopup = new PopupWithForm ('.popup_card', onSubmitAddCardPopupForm, validationOptions, createFormValidator);


function addNewCard(id, name, link, likes, owner) {
    let isLiked = false;
    const currentUserId = profileInfo.getId();
    let isRemovable = owner == currentUserId;

    let i;
    for(i=0; i < likes.length; i++){
        if(likes[i]._id == currentUserId){
            isLiked = true;
            break;
        }
    }

    const card = new Card(id, name, link, isLiked, isRemovable, likes.length, '#card-template', onOpenPicturePopup, likeClickHandler, deleteCardHandler);
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
}

const defaultCardList =  new Section({ 
    items:[],
    renderer: (item) => {
        addNewCard(item._id, item.name, item.link, item.likes, item.owner._id);
    }
}, '.elements');

function deleteCardHandler(cardToDelete) {
    deleteCardPopup.open(()=>{
        api.deleteCard(cardToDelete.getId())
        .then(() => {
            cardToDelete.delete();
        })
        .catch(err => {
            console.log(err);
        })
        .finally(()=>{
            deleteCardPopup.close();
        });
    });
}


function onOpenPicturePopup(link, name) {
    picturePopup.open(link, name);
}


function onOpenAddCardPopup(){
    addCardPopup.open(true);
}

function onEditAvatarPopup() {
    profileAvatarPopup.open(true);
}

function onOpenProfilePopup(){
    profilePopup.open(false);
    const profileData = profileInfo.getUserInfo();
    profilePopup.setInputValues([profileData.name, profileData.profession]);
}


function onSubmitProfilePopupForm(values) {
    const [name, profession] = values;
    api.updateUserInfo(name, profession)
        .then (user => {
            profileInfo.setUserInfo(user.name, user.about, user._id);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(()=>{
            profilePopup.close();
        });
    }


function onSubmitAddCardPopupForm(values) {
    const [name, link] = values;
    
    api.addNewCard(name,link)
        .then(addedCard => {
            addNewCard(addedCard._id, addedCard.name, addedCard.link, addedCard.likes, addedCard.owner._id);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(()=>{
            addCardPopup.close();
        });
}

function onSubmitAvatarPopupForm (values) {
    const link= values[0];
    api.updateUserAvatar(link)
        .then(()=>{
            profileInfo.setAvatar(link);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(()=>{
            profileAvatarPopup.close();
        });
}

editAvatarButton.addEventListener('click', onEditAvatarPopup);

editProfileButton.addEventListener('click', onOpenProfilePopup);

addCardButton.addEventListener('click', onOpenAddCardPopup);

api.getUserInfo()
    .then (user => {
        profileInfo.setUserInfo(user.name, user.about, user._id);
        profileInfo.setAvatar(user.avatar);
    })
    .catch(err => {
        console.log(err);
    }); 


api.getInitialCards()
    .then(cards => {
        defaultCardList.setItems(cards);
        defaultCardList.renderItems ();
    }).catch(err => {
        console.log(err);
    });

function likeClickHandler(currentCard) {
    const likePromise = currentCard.isLiked() ? api.dislikeCard(currentCard.getId()) : api.likeCard(currentCard.getId());
    
    likePromise.then(cardInfo => {
        currentCard.setLikeCount(cardInfo.likes.length);
        currentCard.toggleLike(!currentCard.isLiked());
    }).catch(err => {
        console.log(err);
    });
};

    