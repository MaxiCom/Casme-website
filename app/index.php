<?php $random_backgroud_number = rand(5, 5); 
	if ($random_backgroud_number == 1 ||
		$random_backgroud_number == 2 || 
		$random_backgroud_number == 4) {
		$text_color = "#4a4a4a";
		$text_color_hover = "#0e1c27";
	} else {
		$text_color = "white";
	}
?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<?php include("views/head.html"); ?>
		<style type="text/css">
			header {
				background: url("/images/header/header<?php echo $random_backgroud_number; ?>.jpg") no-repeat;
				background-position: center;
				background-size: cover;
			}
			.background h1, .background h3{
				color: <?php echo $text_color; ?>;
			}

			nav a, nav i {
				color: <?php echo $text_color; ?> !important;
			}
			nav a:hover, nav a:hover i {
				color: <?php echo $text_color_hover; ?> !important;
			}

		</style>
	</head>
	<body>
		<?php include("views/loader.html"); ?>
		<?php include("views/header.html"); ?>
		<?php include("views/floating_contact.html"); ?>
		
		<div id="wrapper">
			<?php include("views/content.html"); ?>
			<?php include("views/footer.html"); ?>
		</div>

		<!-- Libs and scripts -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
		<script type="text/javascript" src="scripts/menu_toggle.js"></script>
		<script type="text/javascript" src="scripts/loader.js"></script>
		<script type="text/javascript" src="scripts/scroll.js"></script>
	</body>
</html>
