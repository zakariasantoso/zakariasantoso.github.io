/* To connect using MetaMask */
async function connect() {
  if (window.ethereum) {
  
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);
    // after connecting the wallet, hide the button
    $("#connectWallet").css("display", "none");
    $("#welcomeMessage").html("Welcome " + window.ethereum.selectedAddress + '!');
  } else {
    console.log("No wallet");
  }
}
(function ($) {

  "use strict";
    // check if user has metamask installed
    if (window.ethereum) {
      $("#connectWallet").css("display", "block");
      $("#connectWallet").val("Connect Wallet");
    } else {
      // disable the button
      $("#connectWallet").css("display", "none");
    }
    // check if user is already connected then show the wallet to welcomeMessage
    if (window.ethereum.selectedAddress) {
      $("#connectWallet").css("display", "none");
      $("#welcomeMessage").html("Welcome " + window.ethereum.selectedAddress + '!');
    }
    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});
  
    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
