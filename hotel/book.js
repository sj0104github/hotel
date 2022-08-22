/* function validation()
        {
            var N,E,P,B,x;
            N=document.getElementById('name').value;
            E=document.getElementById('email').value;
            P=document.getElementById('phonenumber').value;
            B=document.getElementById('bookingdate').value;

            if(N=='' || E==''|| P==''||B=='')
            alert("Please fill details properly ")
            else
            alert("Booked successfully")
        }*/
        const firebaseConfig = {
            apiKey: "AIzaSyDEupYXx9DCC_tA-McrSHhlMBqLIkYh_rE",
            authDomain: "bookform-839e5.firebaseapp.com",
            databaseURL: "https://bookform-839e5-default-rtdb.firebaseio.com",
            projectId: "bookform-839e5",
            storageBucket: "bookform-839e5.appspot.com",
            messagingSenderId: "727450727284",
            appId: "1:727450727284:web:fe6724e0ec10e098d47221"
          };
        
          //initialize firebase
            firebase.initializeApp(firebaseConfig);
        
          //reference for database
          var bookformDB = firebase.database().ref("bookingform")
          
          document.getElementById("bookingform").addEventListener("submit", submitform);
        
          function submitform(e){
            e.preventDefault();
        
            var name = getElementVal('name')
            var email = getElementVal('email')
            var number =getElementVal('number')
            var bookingdate= getElementVal('bookingdate')
        
            saveMessage(name, email, number, bookingdate)
          }
            const saveMessage =(name, eamil, number, bookingdate) =>{
                var newBookForm = bookformDB.push();

                newBookForm.set({
                    name : name,
                    email : email,
                    number : number,
                    bookingdate : bookingdate,

                })
            };

          const getElementVal = (id) =>{
            return document.getElementById(id).value;
          };
          
        