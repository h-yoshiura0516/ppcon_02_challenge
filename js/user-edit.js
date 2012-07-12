$(
  function() 
	{
		$('#get_name').click(
			function()
			{
				if($(this).hasClass('btn-inverse'))
				{
					alert("もう表示したよ");
				}
				else
				{
					var name = $('#yamada_name').text();
					$('#subject01_result').removeClass('badge-important')
					$('#subject01_result').html(name);
					$(this).addClass('btn-inverse');
				}
			}
		);
		
		$('#add_sakurako').click
		(
			function()
			{
				if($(this).hasClass('btn-inverse'))
				{
					if(!confirm("もう１人追加？"))
					{
						return;
					}
				}
				
				$('#member_list').prepend('<li id="sakurako">櫻子</li>');
				$(this).addClass('btn-inverse');
			}
		);
		
		$('#add_himawari').click
		(
			function()
			{
				if($(this).hasClass('btn-inverse'))
				{
					if(!confirm("もう１人追加？"))
					{
						return;
					}
				}
				
				$('#member_list').append('<li id="himawari">向日葵</li>');
				$(this).addClass('btn-inverse');
			}
		);
		
		$('#remove_akari').click
		(
			function()
			{
				if($(this).hasClass('btn-inverse'))
				{
					alert("いない・・・");
				}
				else
				{
					$('#member_list_remove>#akari').remove();
					$(this).addClass('btn-inverse');
				}
			}
		);
		
		$('#change_visible_momo').toggle
		(
			function()
			{
				$('#subject4 #stealth_momo').css('display', 'block');
			}
			, function()
			{
				$('#subject4 #stealth_momo').css('display', 'none');
			}
		);
		
		$('#change_header_html').click
		(
			function()
			{
				if($(this).hasClass('btn-inverse'))
				{
					if(!confirm("まだやるの？"))
					{
						return;
					}
				}
				
				$("h2").each
				(
					function()
					{
						$(this).text("【" + $(this).text() + "】");
					}
				);
				
				$(this).addClass('btn-inverse');
			}
		);
	}
);;
