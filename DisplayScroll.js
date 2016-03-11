(function($){
       $.fn.backToTop = function(config){
            $this = this;
            $window = $(window);
            function displayScroll(){
              $this.text($window.scrollTop() + 'px  : ' + $(document).height()+'px');
                if ($window.scrollTop() + $window.height() + 500 > $(document).height())
                   console.log("danger, you are bumping to the ground");
                }
            $(window).on("load scroll",function(){
              displayScroll();
            });
       };
}(jQuery));
