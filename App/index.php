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
			.cs-loader {
			  position: absolute;
			  top: 0;
			  left: 0;
			  z-index: 10000;
			  height: 100%;
			  width: 100%;
			  background: #006092; }

			.loaded {
			  opacity: 0;
			  visibility: hidden;
			  transition: all .2s ease-out; }

			.cs-loader-inner {
			  position: relative;
			  top: 44%;
			  display: block;
			  width: 2em;
			  height: 4em;
			  margin: 0 auto;
			  box-shadow: inset #006092 0 0 0 0, inset white 0 2em 0 0, inset #006092 0 0 4em 0;
			  background: #006092;
			  animation: hourglass 1s linear infinite; }

			.outer {
			  fill: white; }

			.middle {
			  fill: #006092; }

			@keyframes hourglass {
			  0% {
			    transform: rotate(0deg);
			    box-shadow: inset #006092 0 0 0 0, inset white 0 2em 0 0, inset #006092 0 4em 0 0, inset white 0 4em 0 0; }
			  80% {
			    transform: rotate(0deg);
			    box-shadow: inset #006092 0 2em 0 0, inset white 0 2em 0 0, inset #006092 0 2em 0 0, inset white 0 4em 0 0; }
			  100% {
			    transform: rotate(180deg);
			    box-shadow: inset #006092 0 2em 0 0, inset white 0 2em 0 0, inset #006092 0 2em 0 0, inset white 0 4em 0 0; } }

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

		<!-- Font and libs -->
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

		<!-- Stylesheets -->
		<link rel="stylesheet" type="text/css" href="styles/global.css"/>
		<link rel="stylesheet" type="text/css" href="styles/floating_contact.css"/>
		<link rel="stylesheet" type="text/css" href="styles/header.css"/>
		<link rel="stylesheet" type="text/css" href="styles/media.css" />
		<link rel="stylesheet" type="text/css" href="styles/content.css"/>
		<link rel="stylesheet" type="text/css" href="styles/footer.css"/>

		<!-- Libs and scripts -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
		<script type="text/javascript" src="scripts/loader.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
		<script type="text/javascript" src="scripts/menu_toggle.js"></script>
		<script type="text/javascript" src="scripts/scroll.js"></script>
		<script type="text/javascript" src="scripts/prestationSelect.js"></script>
	</body>
</html>
