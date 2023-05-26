$(document).ready(function() {

	var booksDataJSON = JSON.parse(sessionStorage.getItem('booksData'));
	var bookStorage = [];
	sessionStorage.setItem("booksCart", JSON.stringify(bookStorage)); 


	createBookCards(booksDataJSON);
	loginAcc();
	getCountCart();
	
	$(".modalLogin").click(function() {

		if($(".login-data").css("display") == "none")
		{
			alert("You have been logout!");
			
			$(".modal-show-login").modal('show');
		}
		else {
			$(".modal-show-login").modal('show');
		}
		
	})

	$(".btn-add-to-cart").click(function()
	{
		var getBooks = JSON.parse(sessionStorage.getItem("booksCart"));
		booksStorage = getBooks;
		var numId = $(this).attr('id');
		

		if($(this).hasClass("btn-primary"))
		{
			$("#"+numId).removeClass("btn-primary");
			$("#" +numId).addClass("btn-success");
			$("#"+numId+ " .icon-cart").removeClass("fa-cart-shopping");
			$("#"+numId+ " .icon-cart").addClass("fa-check");
			getCart(numId, booksDataJSON, bookStorage, getBooks);
		}
		// else {
		// 	$("#"+numId).removeClass("btn-success");
		// 	$("#" +numId).addClass("btn-primary");
		// 	$("#"+numId+ " .icon-cart").removeClass(" fa-check");
		// 	$("#"+numId+ " .icon-cart").addClass("fa-cart-shopping");
		// 	removeCartBooks(numId, getBooks);
		// }
		
	})

	$(".cart-btn").click(function() {

		if($(".login-data").css("display") == "block")
		{
			alert("You must login!");
			$(".modal-show-login").modal('show');
		}
		else {

			var getBooks = JSON.parse(sessionStorage.getItem("booksCart"));
			console.log(getBooks);
			if(jQuery.isEmptyObject(getBooks))
			{
				$(".cart-body").append('<h6>Start to add books into your cart now!</h6>');
				$(".total-div").css("display", "none");
			}
			else {
				$(".cart-body").empty();
				getCheckOutBooks(getBooks);
				
			}
		
			$(".modal-show-cart").modal('show');
		}
		
	})

	$(".check-out-btn").click(function() {

		$(location).attr('href','check-out.html')
	})

	$(".btn-remove-cart").click(function() {

		console.log("DELETE!");

		var bookDelete = [];
		var numId = $(this).attr("id");
		removeCartBooks(numId, bookDelete);

	})

	$(".btn-login").click(function() {

		login();

	})

	$(".close").click(function() {
		$(".modal").modal("hide");
	})


})





function createBookCards(booksDataJSON) {

	$.each(booksDataJSON, function(i,v) {
		$(".body-div").append(
			'<div class="card col-md-2 list-books-items shadow-sm" style="width: 18rem;">'+
				'<img class="card-img-top book-photo" src="'+v.photo+'">'+
					'<div class="card-body">'+
						'<h6 class="card-title book-title">'+v.title+'</h6>'+
						'<p class="card-text book-author">'+v.author+'</p>'+
					'</div>'+
					'<div class="card-body">'+
						'<div class="d-flex justify-content-between">'+
							'<p class="card-link">$ '+v.price+'</p>'+
							'<button type="button" class=" btn btn-primary btn-add-to-cart" id='+v.id+' style="align-items: right"><i class="icon-cart fa-solid fa-cart-shopping"></button>'+
						'</div>'+
					'</div>'+
			'</div>');			
	});
}

function loginAcc() {

	var acc = JSON.parse(sessionStorage.getItem("account"));
	console.log(acc);

	if(jQuery.isEmptyObject(acc))
	{
		$(".login-data").css("display", "show");
	}
	else {
		$(".login-data").css("display", "none");
		$(".modalLogin").append(acc.name)
		
	}
}

function getCart(idnum, booksDataJSON, bookStorage, booksOnCart) {

	var getBooks = booksOnCart;
	var selectedBook = {};
	var id = idnum;

	$.each(booksDataJSON, function(i,v) {
		if(v.id	 == id)
		{
			selectedBook = v;
			bookStorage.push(selectedBook);
			console.log("Books: "+ JSON.stringify(bookStorage));
			sessionStorage.setItem("booksCart", JSON.stringify(bookStorage));
			getCountCart(getBooks);
			return false;
		}
	})

}

function getCountCart(booksOnCart) {
		var getBooks = JSON.parse(sessionStorage.getItem("booksCart"));
		var count = Object.keys(getBooks).length;
		console.log(count) 
		$(".countCart").text(count);
}

function getCheckOutBooks(booksOnCart) {

	$(".total-div").css("display", "block");
	var sumtotal = 0;

	$.each(booksOnCart, function(i,v) {

		sumtotal += v.price; 
		$(".totalOnCart").text("$" +sumtotal);

		$(".cart-body").append(
			'<div class="card card-cart-div" id="'+v.id+'-'+v.title+'">'+
					'<div class="card-body">'+
						'<div class="row mb-3">'+
							'<div class="col-md-10"'+
							'<h6 class="">'+v.title+'</h6>'+
							'<p class="card-text book-author">'+v.author+'</p>'+
							'</div>'+
							'<div class="col-md-2">'+
						'</div>'+
						'</div>'+
						'<div class="row">'+
						'<div class="col-md-4">'+
								
								'<input type="number" class="form-control" id="qty" value="1" disabled/>'+
						'</div>'+
						'<div class="col-md-8 d-flex justify-content-end">'+
							'<h5 class="card-link">$ '+v.price+'</h5>'+
						'</div>'+
					'</div>'+
					'</div>'+
			'</div>');			
	});

}

function removeCartBooks(id, bookDelete) {
	var getBooks = JSON.parse(sessionStorage.getItem("booksCart"));
	bookDelete = getBooks;
	var chooseBook = {};
	var idDelete = id;

	$.each(getBooks, function(i,v) {

		if(v.id == idDelete)
		{
			console.log("Delete Book:" + v);
			bookDelete.splice(i, 1);
			console.log(bookDelete);
			sessionStorage.setItem("booksCart", JSON.stringify(bookDelete));

		}
	})

	

}

function login() {
	var acc = JSON.parse(sessionStorage.getItem("account"));

	var email = $("#input-email").val();
	var pass = $("#input-pass").val();

	$.each(acc, function(i,v) {

		console.log(acc.email);
		if(email == v.email && pass == v.password) 
		{
			$(".login-data").css("display", "none");
			$(".modalLogin").append(v.name)
		}
		else email != v.email || pass != v.password
		{
			alert("Your email or password is incorrect.");
		}
	})



}
