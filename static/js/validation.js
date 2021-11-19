function registration() {
    var inputsName = document.getElementById("name").value;
    var inputsEmail = document.getElementById("email").value;
    var inputsPhone = document.getElementById("phone").value;

// //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    //validation for name
    if (inputsName == '') {
        alert('Please enter your name');
        return false;
        // console.log("The value of a is " + inputsName);
    }


    else if (!letters.test(inputsName)) {
        alert('Name field required only alphabet characters');
        return false;
    }



    //validatiom for email.
    else if (inputsEmail == '') {
        alert('Please enter your user email id');
        return false;
    }
    else if (!filter.test(inputsEmail)) {
        alert('Invalid email');
        return false;
    }

//validation of phone number.
    else if (inputsPhone == '') {
        alert('Please enter phone number');
        return false;
    }

}






//====================================shweta================================
//function validation(btnValue) {
//var startMeter = $("#meternoStartId").val();
//		var endMeter = $("#meternoEndId").val();
//    var inputsName = document.getElementById("name").value;
//    var inputsEmail = document.getElementById("email").value;
//    var inputsPhone = document.getElementById("phone").value;
//
//
//    //// //email id expression code
//    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
//    var letters = /^[A-Za-z]+$/;
//    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//
//
//    //validation for name
//    if (inputsName == '') {
//        alert('Please enter your name');
//        return false;
//        // console.log("The value of a is " + inputsName);
//    }
//
//
//    else if (!letters.test(inputsName)) {
//        alert('Name field required only alphabet characters');
//        return false;
//    }
//
//
//
//    //validatiom for email.
//    else if (inputsEmail == '') {
//        alert('Please enter your user email id');
//        return false;
//    }
//    else if (!filter.test(inputsEmail)) {
//        alert('Invalid email');
//        return false;
//    }
//
////validation of phone number.
//    else if (inputsPhone == '') {
//        alert('Please enter phone number');
//        return false;
//    }
//
//
//
//		if (btnValue == "update") {
//			if (confirm("Are you sure you want to Update Meter details..")) {
//			$("#addMeterDetailsFormId").attr('action',
//					'./updateMeterInventoryDetails').submit();
//		}
//		}
//		if (btnValue == "save") {
//			//alert("hii");
//			if (confirm("Are you sure you want to Add Meter details..")) {
//			$("#addMeterDetailsFormId").attr('action',
//					'./addMeterInventoryDetails').submit();
//		}
//		}
//
//
//	}













function addition() {
    var iname = document.getElementById("txtName").value;
    var iemail = document.getElementById("txtEmail").value;
    var iphone= document.getElementById("txtPhone").value;


    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var characters = /^[A-Za-z]+$/;
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    //validation for name
    if (iname == '') {
        alert('Please enter your name');
        return false;
        // console.log("The value of a is " + inputsName);
    }


    else if (!characters.test(iname) {
        alert('Name field required only alphabet characters');
        return false;
    }



    //validatiom for email.
    else if (iemail == '') {
        alert('Please enter your user email id');
        return false;
    }
    else if (!email.test(iemail) {
        alert('Invalid email');
        return false;
    }

//validation of phone number.
    else if (iphone == '') {
        alert('Please enter phone number');
        return false;
    }

}
