require([
    'jquery',
    "jquery/ui"
], function($) {
    'use strict';

    $(document).ready(function() {
        const $sidebar = $('.sidebar-additional');
        const $productInfo = $('.product-info-main');
        const $gallery = $('.gallery-placeholder');
        const $lastImage = $('.desktop-gallery-image-container:last-child');
        const $wishlistIcon = $('.towishlist'); // Assuming the wishlist icon has this class

        if (!$gallery.length || !$lastImage.length || !$wishlistIcon.length) {
            console.warn("Gallery, last image, or wishlist icon not found");
            return;
        }

        // Function to update sticky positioning based on scroll
        function updateSticky() {
            const galleryRect = $gallery[0].getBoundingClientRect();
            const lastImageRect = $lastImage[0].getBoundingClientRect();

            if (galleryRect.bottom <= 0) {
                // When gallery scrolls out of view, make items sticky
                $sidebar.css('position', 'sticky');
                $productInfo.css('position', 'sticky');
                $wishlistIcon.css('position', 'sticky');
                $sidebar.css('top', '0'); // Add an offset if necessary
                $productInfo.css('top', '0');
                $wishlistIcon.css('top', '10px'); // Adjust top as needed
                $wishlistIcon.css('right', '10px'); // Position in the top right corner
            } else {
                // When gallery is in view, disable sticky
                $sidebar.css('position', 'relative');
                $productInfo.css('position', 'relative');
                $wishlistIcon.css('position', 'relative');
            }

            if (lastImageRect.bottom <= window.innerHeight) {
                // When the last image is fully visible, disable sticky
                $sidebar.css('position', 'relative');
                $productInfo.css('position', 'relative');
                $wishlistIcon.css('position', 'relative');
            }
        }

        // Attach the updateSticky function to the scroll event
        $(window).on('scroll', updateSticky);

        // Initial call to set the correct position on page load
        updateSticky();
    });
});