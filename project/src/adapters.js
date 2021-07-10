export const adaptOfferToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    previewImage: offer.preview_image,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    host: {
      ...offer.host,
      isPro: offer.host.is_pro,
      avatarUrl: offer.host.avatar_url,
    },
  };

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
};

export const adaptCommentToClient = (comment) => {
  const adaptedComment = {
    ...comment,
    user: {
      ...comment.user,
      isPro: comment.user.is_pro,
      avatarUrl: comment.user.avatar_url,
    },
  };

  delete adaptedComment.user.is_pro;
  delete adaptedComment.user.avatar_url;

  return adaptedComment;
};


