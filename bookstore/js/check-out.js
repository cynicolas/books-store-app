$(document).ready(function() {

    
    getCartCheckOut();

    $("#card-details-form").submit(function(e) {
        e.preventDefault();

        getCardDetails();
        
        
    })

    $(".buy-btn").click(function() {

        $(location).attr('href','confirm-book.html')
    })

})

function getCartCheckOut(getBooksCheckOut) {

    var getBooksCheckOut = JSON.parse(sessionStorage.getItem("booksCart"));
    var sumtotal = 0;

    $.each(getBooksCheckOut, function(i,v) 
    {
        sumtotal += v.price;
        $(".totalOnCart").text("$" +sumtotal);

		$(".check-out-div").append(
			'<div class="card-cart-div">'+
					'<div class="card-body">'+
						'<div class="row">'+
                        '<div class="col-md-5">'+
                            '<h6 class="">'+v.title+'</h6>'+
                            '<p class="card-text book-author">'+v.author+'</p>'+
                        '</div>'+
						'<div class="col-md-2 d-flex justify-content-center">'+
							'<p>1</>'+	
						'</div>'+
						'<div class="col-md-5 d-flex justify-content-end">'+
							'<h5 class="card-link">$ '+v.price+'</h5>'+
						'</div>'+
					'</div>'+
					'</div>'+
			'</div>');
    })
}

function getCardDetails() {

        var getBooksCheckOut = JSON.parse(sessionStorage.getItem("booksCart"));
        var cardNum = $("#cardNumber").val();
        var expDt = $("#expiryDate").val();
        var cvv = $("#cvv").val();
        var cardName = $("#cardHolder").val();
        var fname = $("#fname").val();
        var add = $("#address").val();
        var mbnum = $("#mobnum").val();

        if(cardNum == "" || expDt == "" || cvv == "")
        {
            alert("Please fill out required fields!")
        }
        else {
            
            var Info = {
                "cardNumber" : cardNum,
                "expireDate" : expDt,
                "cvv" : cvv,
                "cardName" : cardName,
                "fullName" : fname, 
                "address" : add,
                "mobileNum" : mbnum
            }
            sessionStorage.setItem("CardDetailsInformation", JSON.stringify(Info));

            $(".fname-modal").text(fname);
            $(".add-modal").text(add);
            $(".mobNum-modal").text(mbnum);
            $(".cardNum-modal").text(cardNum);
            $(".expDt-modal").text(expDt);
            $(".cvv-modal").text(cvv);
            $(".ch-modal").text(cardName);

            $(".table-books tbody:last-child").empty();
            cart(getBooksCheckOut);
            $(".modal-show-details").modal("show");

        }

}

function cart(getBooksCheckOut) {

    console.log(getBooksCheckOut);
    $.each(getBooksCheckOut, function(i,v) {

        $(".table-books tbody:last-child").append('<tr><td>'+v.title+'</td><td>1</td><td>'+v.price+'</td></tr>');
    })
}