<?php 
	$random_backgroud_number = rand(0, 4);

	switch ($random_backgroud_number) {
		case 1:
		case 4:
			$text_color = "#4a4a4a";
			break ;
		default:
			$text_color = "white";
	}
?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<?php include("views/head.html"); ?>

		<style type="text/css">
			header {
				background: url("/ressources/header/header<?php echo $random_backgroud_number; ?>.jpg") no-repeat;

				background-position: center;
				background-size: cover;
			}

			header .background h1, header .background h2{ color: <?php echo $text_color; ?>;}
			nav a, nav i { color: <?php echo $text_color; ?> !important;}
			@media (max-width: 768px) {	nav a, nav a i {color: #222222 !important;}}
		</style>
	</head>
	<body>
		<?php 
			include("views/loader.html");
			include("views/header.html");
			include("views/floating_contact.html");
		?>

		<div id="wrapper" class="hidden">
			<?php include("views/content.html"); ?>
			<?php include("views/footer.html"); ?>
		</div>


			<!-- Libs and scripts -->
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
			<script type="text/javascript" src="scripts/loader.js"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
			<script type="text/javascript" src="scripts/menu_toggle.js"></script>
			<script type="text/javascript" src="scripts/scroll.js"></script>
			<script type="text/javascript" src="scripts/prestationSelect.js"></script>
	</body>
</html>
