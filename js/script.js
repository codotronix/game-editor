$(function(){
	
	adjustFrameContainerSizes();
	resolveBxIncludes(); 

	$(window).resize(adjustFrameContainerSizes);

	//Calculates and applies the panel sizes based on window sizes
	function adjustFrameContainerSizes () {
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		var maxSidePanelWidth = 300;
		var maxBottomPanelHeight = 270;

		var sidePanelWidth = (windowWidth * .3);
		sidePanelWidth = (sidePanelWidth > maxSidePanelWidth) ? maxSidePanelWidth : sidePanelWidth;

		var midPanelWidth = windowWidth - sidePanelWidth;

		var bottomPanelHeight = (windowHeight * .25);
		//console.log('bottomPanelHeight='+bottomPanelHeight);
		bottomPanelHeight = (bottomPanelHeight > maxBottomPanelHeight) ? maxBottomPanelHeight : bottomPanelHeight;
		//console.log('bottomPanelHeight='+bottomPanelHeight);
		var midPanelHeight = windowHeight - bottomPanelHeight;

		$('#midPanelContainer').css({
			'height' : midPanelHeight + 'px',
			'width' : midPanelWidth + 'px'
		});

		$('#bottomPanelContainer').css({
			'height' : bottomPanelHeight + 'px',
			'width' : midPanelWidth + 'px'
		});

		$('#rightPanelContainer').css({
			'width' : sidePanelWidth + 'px'
		});
	}

    //include the external files
	function resolveBxIncludes () {
		var bxIncludeDivs = $('[bx-include]');

		//while (bxIncludeDivs.length > 0) {
			bxIncludeDivs.each(function () {
				var _this = this;
				var url = $(_this).attr('bx-include');
                
				if(url.trim().length <= 0) {return;}
                
				$.ajax({
					"url": url,
					"success": function (data) { 
                        $(_this).html(data); 
                    },
					"error": function (err) { 
                        console.log(err);
                    }
				})
			});
            
            //bxIncludeDivs.removeAttr('bx-include');
		//}
	}
    
    //When user selects an object from Objects
    $('body').on('click', '#objectList li', function(){
        $('#objectList li .fa-check-circle').removeClass('fa-check-circle').addClass('fa-circle');
        $(this).find('.fa').removeClass('fa-circle').addClass('fa-check-circle');
        _9S.selectedObject = _9S.utilities.getObject($(this).attr('data-objectID'));
        _9S.functions.populateProperties();
    });
    
    //When user changes a property value
    $('body').on('blur', '#propertiesTable input[type="text"]', function(){
        _9S.selectedObject[$(this).attr('data-property')] = $(this).val();
    });
})