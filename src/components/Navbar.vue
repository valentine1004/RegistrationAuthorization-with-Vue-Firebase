<template>
	<div class="header clearfix">
		<nav>
			<ul class="nav nav-pills pull-right">
				<router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
				<router-link to="/admin" tag="li" active-class="active"><a>Admin</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
        <router-link to="/register" tag="li" active-class="active"><a>Register</a></router-link>
				<router-link to="/about" tag="li" active-class="active"><a>About</a></router-link>
			</ul>
		</nav>
		<h3 class="text-muted"><img src="../assets/logo.png" height="40" width="60"></h3>
	</div>
</template>

<script>
	
</script>

<style>
	/* Space out content a bit */
body {
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Everything but the jumbotron gets side spacing for mobile first views */
.header,
.marketing,
.footer {
  padding-right: 15px;
  padding-left: 15px;
}

/* Custom page header */
.header {
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
}
/* Make the masthead heading the same height as the navigation */
.header h3 {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 40px;
}

/* Custom page footer */
.footer {
  padding-top: 19px;
  color: #777;
  border-top: 1px solid #e5e5e5;
}

/* Customize container */
@media (min-width: 768px) {
  .container {
    max-width: 730px;
  }
}
.container-narrow > hr {
  margin: 30px 0;
}

/* Main marketing message and sign up button */
.jumbotron {
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
}
.jumbotron .btn {
  padding: 14px 24px;
  font-size: 21px;
}

/* Supporting marketing content */
.marketing {
  margin: 40px 0;
}
.marketing p + h4 {
  margin-top: 28px;
}

/* Responsive: Portrait tablets and up */
@media screen and (min-width: 768px) {
  /* Remove the padding we set earlier */
  .header,
  .marketing,
  .footer {
    padding-right: 0;
    padding-left: 0;
  }
  /* Space out the masthead */
  .header {
    margin-bottom: 30px;
  }
  /* Remove the bottom border on the jumbotron for visual effect */
  .jumbotron {
    border-bottom: 0;
  }
}
</style>