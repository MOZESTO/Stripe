import axios from "axios";


   function  pay(reqdata){
   return axios.post('https://cdk-payment-gateway.onrender.com/Transaction', {
    
   card_holder_name:reqdata.name,
  mail: reqdata.email,
  card_number:reqdata.card,
 cvv: reqdata.svc,
 amount: reqdata.amount,
 currency:'usd',
 expiration_date:  reqdata.expdate


  });
}
  export default pay;