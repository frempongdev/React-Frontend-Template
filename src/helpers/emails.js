import emailjs from 'emailjs-com';

const sendInfoMail = (formData) => {

   emailjs.send(
       "service_ecio0ef","template_uwqtc4f",
       {
           from_name: formData.name,
           from_email: formData.email,
           from_phone: formData.phone,
           pickup_date: formData.pickup_date,
           drop_date: formData.drop_date,
           car: formData.car,
           price: formData.totalCost,
           security_deposit: formData.securityDeposit,
           message: formData.message,
           reply_to: formData.email,
       },
       '1gVpV_ql4be-4SxPk',
   ).then(() => {
       // console.log('SUCCESS!', response.status, response.text);
       // alert('Thanks, you will soon receive an email from us!');
   }).catch(() => {
       // console.error('FAILED...', err);
       // alert('Failed to send request. Please try again later.');
   });
}

const sendBookerMail = (formData) => {
    console.log("my Form data",formData)
    emailjs.send(
        "service_qo4tdqs","template_q6xfuka",
        {
            from_name: formData.from_name,
            from_email: formData.from_email,
            pickup_date: formData.pickup_date,
            drop_date: formData.drop_date,
            car: formData.car,
            price: formData.totalCost,
            security_deposit: formData.securityDeposit,
            reply_to: formData.email,
        },
        'GO696iWCF_r-pMca7',
    ).then(() => {
        // console.log('SUCCESS!', response.status, response.text);
        // alert('Thanks, you will soon receive an email from us!');
    }).catch(() => {
        // console.error('FAILED...', err);
        // alert('Failed to send request. Please try again later.');
    });
}

export const sendMail = (formDetails) => {

    emailjs.send(
        "service_um0e3g6","template_1bkilkh",
        {
            from_name: formDetails.name,
            from_email: formDetails.email,
            message: formDetails.message,
            reply_to: formDetails.email,
        },
        'teur3JFsO0kcdseFd',
    ).then(() => {
        // console.log('SUCCESS!', response.status, response.text);
        alert('Thanks, you will soon receive an email from us!');
        sendInfoMail(formDetails);
    }).catch(() => {
        // console.error('FAILED...', err);
        alert('Failed to send request. Please try again later.');
    });
} 

export const sendBookingMail = (formData) => {
    emailjs.send(
        "service_tp7mbje","template_568w6qh",
        {
                from_name: formData.from_name,
                from_email: formData.from_email,
                from_phone: formData.from_phone,
                pickup_date: formData.pickup_date,
                drop_date: formData.drop_date,
                car: formData.car,
                message: formData.message,
                reply_to: formData.email,  
        },
        '6pMQ9PA6ES6F4J-8J',
    ).then(() => {
        sendBookerMail(formData);
        // console.log('SUCCESS!', response.status, response.text);
    }).catch(() => {
        // console.error('FAILED...', err);
        alert('Failed to send request. Please try again later.');
    });
}
