fetch(`http://localhost:8080/pay/:id${prompt("what is your user id ")}`)
  .then((paymentCreated) => {
    return paymentCreated.json();
  })
  .then((data) => {
    console.log("create payment ", data);
    0;
    if (data.order_id) {
      var options = {
        key: "rzp_test_zIUsPykcjYEZHO",
        amount: "1",
        currency: "INR",
        name: "Dummy Academy",
        description: "Pay & Checkout this Course, Upgrade your DSA Skill",
        image: `https://media.geeksforgeeks.org/wp-content/uploads/20210806114908/dummy-200x200.png`,
        order_id: data.order_id,
        handler: function (response) {
          console.log("response of payment line 18 index.js ==>> ", response);
          alert("This step of Payment Succeeded");
        },

        prefill: {
          contact: prompt("what is your contact no"),
          name: prompt("what is your name"),
          email: prompt("what is your email"),
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

      console.log("options new option for calling payment getway", options);

      var razorpayObject = new Razorpay(options);
      // console.log("our razor pay ", razorpayObject);
      razorpayObject.on("payment.failed", function (response) {
        // console.log(response);
        alert("This step of Payment Failed");
      });

      document.getElementById("pay-button").onclick = function (e) {
        razorpayObject.open();
        //   alert("open our razor pay");
        e.preventDefault();
      };
    }
  });
