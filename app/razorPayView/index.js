fetch("http://localhost:8080/pay").then((orderData) => {
  console.log("orderData ", orderData);

  if (false) {
    var options = {
      key: "rzp_test_zIUsPykcjYEZHO",
      amount: "5",
      currency: "INR",
      name: "Shopper's Stop",
      description: "Pay & Checkout this Course, Upgrade your DSA Skill",
      image: `https://media.geeksforgeeks.org/wp-content/uploads/
                  20210806114908/dummy-200x200.png`,
      order_id: "order_J5PJU6ha26uGup",
      handler: `function (response){
           console.log(response)
           alert("This step of Payment Succeeded");
       }`,
      prefill: {
        contact: "7226884733",
        name: "Shrey Patel",
        email: "shivaaypatel63@gmail.com",
      },
      notes: {
        description: "Best Course for SDE placements",
        language: `Available in 4 major Languages JAVA, 
                     C/C++, Python, Javascript`,
        access: "This course have Lifetime Access",
      },
      theme: {
        color: "#2300a3",
      },
    };
    var razorpayObject = new Razorpay(options);
    console.log("our razor pay ", razorpayObject);
    razorpayObject.on("payment.failed", function (response) {
      console.log(response);
      alert("This step of Payment Failed");
    });

    document.getElementById("pay-button").onclick = function (e) {
      razorpayObject.open();
      //   alert("open our razor pay");
      e.preventDefault();
    };
  }
});
