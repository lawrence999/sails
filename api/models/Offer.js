/**
* Offer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
*/

module.exports = {
    schema: true,
    attributes: {
        Offer_Type: { type: 'string',required: true},
        Offer_Booking_type: {type: 'string',required: true},
        Offer_Name: {type: 'string',required: true},
        Offer_Included_short: {type: 'string',required: true},
        Offer_Details: {type: 'string', required: true},
        Offer_Time_start: {type: 'date',required: true},
        Offer_Time_end: {type: 'date',required: true},
        Offer_Time_length: {type: 'integer',required: true},
        // Offer_Inactive_dates: {type: 'array',required: true},
        // Offer_Days: {type: 'array',required: t	rue},
        Offer_Numbers: {type: 'integer',required: true},
        Price_today: {type: 'integer',required: true},
        Offer_Price_to_Guests: {type: 'integer',required: true},
        Offer_How_to_book: {type: 'string',required: true},
        Offer_Active_Inactive: {type: 'string',required: true},
        Offer_Image: {type: 'string',required: true}
    }
};
