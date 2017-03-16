<?php 
	$random_backgroud_number = rand(0, 4);

	switch ($random_backgroud_number) {
		case 1:
		case 4:
			$text_color = "#222222";
			break ;
		default:
			$text_color = "white";
	}
?>
<!DOCTYPE html>
<html lang="fr" prefix="og: http://ogp.me/ns#">
	<head>
		<?php include("views/head.html"); ?>

		<link rel="stylesheet" type="text/css" href="stylesheets/index.min.css">
		<style type="text/css">
			header {
				background: url("/resources/images/header/background-plomberie-<?php echo $random_backgroud_number; ?>.jpg") no-repeat;
				background-position: center;
				background-size: cover;
			}
			
			header .background h1, header .background h2{ color: <?php echo $text_color; ?>;}
		</style>
	</head>
	
	<body>
		<?php 
			include("views/loader.html");
			include("views/header.html");
			include("views/floating_contact.html");
			include("views/content.html");
			include("views/footer.html");
		?>

		<!-- LIBS AND SCRIPTS -->
		<script src="resources/libraries/javascript/jquery.min.js"></script>
		<script src="resources/libraries/javascript/bootstrap.min.js"></script>
		<script type="text/javascript" src="scripts/index.min.js"></script>

		<!-- GOOGLE ANALYTICS -->
		<script async>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-92815517-1', 'auto');
		  ga('send', 'pageview');
		</script>
	</body>
</html>
