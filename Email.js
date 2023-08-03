exports.email = function (recipientMail, Subject = 'Sending Email using Node.js', Message = 'That was easy!') {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
            user: 'chatterjeeraiaa@gmail.com',
            pass: 'vvmmtbjewfcdhwmh'
        }
    });

    var mailOptions = {
        from: 'chatterjeeraiaa@gmail.com',
        to: recipientMail,
        subject: Subject,
        text: Message
    };
    try {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                
            }
        });
        
    }
    catch (error) {
        return "Email Not sent "
    } 
 
 };

