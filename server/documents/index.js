module.exports = ({ name, phone, email, languages }) => {
return `
    <!doctype html>
    <html> 
      <head>     
         <title>${name}'s Resume</title> 
      </head>
      <body border="2px solid black"> 
         <h1><font face="script" size="7" color="blue">${name}</font>
      </h1> 
      <img src="https://pbs.twimg.com/profile_images/1093332495469330433/KfSjIp5h_400x400.jpg" align="right" width="200px" height="200px"> 
      <p>123 State Street <br>Rochester, MN 55901 <br>${phone} <br><a href="mailto:${email}"> Email: ${email}</a>
      </p> 
      <p align="center"><b>Objective:</b> To get a really <i>sweet</i> job.</p> 
      <p>Languages: ${languages}</p> 
      </body> 
    </html>
    `;
};