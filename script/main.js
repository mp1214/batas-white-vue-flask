document.getElementById("header").innerHTML= ` <main>
<div class="row">
    <div class="col-1"></div>
    <div class="col-10">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html" "><img
                        src="./assets/imagen/logo-batas-removebg-preview.png" alt="logo batas con amor"
                        width="180"></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="font-weight:700;">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" [routerLink]="'/intro'"
                                href="index.html">Quienes Somos</a>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" [routerLink]="['/productos']" href="#">Productos</a>-->
                            <a class="nav-link" href="producto.html">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacto.html">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="dashboard.html">Login</a>
                        </li>
                        <li class="nav-it "><a href="https://api.whatsapp.com/send?phone=" target="_blanK"><i
                                    class="fa-brands fa-lg fa-whatsapp fa-2x1"></i> </a> </li>
                        <li class="nav-it"><a href="#" target="_blanK"><i
                                    class="fa-brands fa-instagram fa-lg fa-2x1"></i> </a> </li>
                        <li class="nav-it"> <a href="http://facebook.com/batas%20con%20amor" target="_blanK"><i
                                    class="fa-brands fa-facebook fa-lg fa-2x1"></i> </a> </li>

                    </ul>

                </div>
            </div>
        </nav>
    </div>
    <div class="col-1"></div>
</div>
</main>`
document.getElementById("footer").innerHTML= `<footer>
<div class="row">
    <div class="col-1"></div>
    <div class="col-10">
        <section class="footer">
            <footer>
                <div class="footer">

                    <!--     <a href="#top"><button type="submit" class="btn btn-close-white"><i class="fa-solid fa-arrow-turn-up"></i></button></a>
        -->

                    <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>Piedras 1230 - San
                        Miguel de Tucumán</p>
                    <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> 3813501651</p>
                    <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> faby@gmail.com</p>
                    <p>Atendemos de L a V 17 a 21 hs y Sábados de 10 a 17 hs</p>
                </div>

            </footer>`