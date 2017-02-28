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
				background: url("/resources/images/header/background<?php echo $random_backgroud_number; ?>.jpg") no-repeat;

				background-position: center;
				background-size: cover;
			}
			
			header .background h1, header .background h2{ color: <?php echo $text_color; ?>;}
			nav a, nav i { color: <?php echo $text_color; ?> !important;}
			@media (max-width: 768px) {	nav a, nav a i {color: #222222 !important;}}
		</style>

		<link rel="stylesheet" type="text/css" href="stylesheets/index.min.css">
	</head>
	<body>
		<?php 
			include("views/loader.html");
			include("views/header.html");
			include("views/floating_contact.html");
		?>

		<div id="wrapper">
			<?php include("views/content.html"); ?>
			<?php include("views/footer.html"); ?>
		</div>

		<!-- Libs and scripts -->
		<script src="resources/libs/javascript/jquery.min.js"></script>
		<script src="resources/libs/javascript/bootstrap.min.js"></script>
		<script type="text/javascript" src="scripts/index.min.js"></script>
	</body>
</html>
