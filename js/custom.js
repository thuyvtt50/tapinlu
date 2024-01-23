// JavaScript Document
$('#banner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#bai-viet').owlCarousel({
   	loop:true,	// cho lap lại		
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
   	 autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	nav:true,	// cho xuất hiện bộ nút tới lui 
	margin:40,
// xuất hiện item tùy theo thiết bị (pc/ ipad/phone)i


	 responsive:{
        0:{
            items:1,
           dots:false,
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
	
	  })
