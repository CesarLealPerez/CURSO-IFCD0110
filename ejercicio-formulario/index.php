<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ejercicio formulario</title>
</head>

<body>
    <?php if (isset($_POST['nombre'])) { ?>
        <button onclick="javascript:history.back();">
            << Volver</button>
                <!--HTML-->

                <ul>
                    <li>Nombre: <b><?php echo $_POST['nombre']; ?></b></li>
                    <li>Edad: <b><?php echo $_POST['edad']; ?></b></li>
                    <li>Email: <b><?php echo $_POST['email']; ?></b></li>
                    <li>Teléfono: <b><?php echo $_POST['tel']; ?></b></li>
                    <li>Curso: <b><?php echo $_POST['curso']; ?></b></li>
                    <li>Ganas: <b><?php echo $_POST['cuantoganas']; ?></b></li>
                    <li>Gastas: <b><?php echo $_POST['cuantogastas']; ?></b>
                        <ul>
                            <li>Te queda: <?php echo $_POST['cuantoganas'] - $_POST['cuantogastas'];?></li>
                        </ul>
                    </li>
                </ul>
                <!-- como se abre el php -->
            <?php
        } else {
            ?>
                <form target="_self" name="form" id="form" action="index.php" method="post">
                    <!--HTML Mostramos el formulario action "index.php"-->
                    <ul>
                        <!-- 
                H1 y H2 aquí van dentro de la etqueta UL para que no se solape con los campos,
                ya que este UL está en posición absoluta
             -->
                        <h2>Envíanos tus datos</h2>
                        <h1>Cubre el formulario</h1>
                        <!-- 
                Empiezan los campos de formulario
             -->
                        <li>
                            <!-- Campo obligatorio tipo texto-->
                            <label for="nombre"><span class="required">*</span> Tu nombre</label><br>
                            <input type="text" name="nombre" id="nombre" required>

                        </li>
                        <li>
                            <!-- Campo tipo numérico-->
                            <label for="edad">Tu edad</label><br>
                            <input type="number" name="edad">

                        </li>
                        <li>
                            <!-- Campo tipo numérico-->
                            <label for="cuantoganas">Cuanto ganas?</label><br>
                            <input type="number" name="cuantoganas">

                        </li>
                        <li>
                            <!-- Campo tipo numérico-->
                            <label for="cuantogastas">Cuánto gastas?</label><br>
                            <input type="number" name="cuantogastas">

                        </li>
                        <li>
                            <!-- Campo obligatorio tipo Email-->
                            <label for="email"><span class="required">*</span> Email</label><br>
                            <input type="email" name="email" id="email" required>

                        </li>
                        <li>
                            <!-- Campo tipo Tel (teléfono)-->
                            Teléfono <br>(formato xxx yyy zzz):<br>
                            <input type="tel" name="tel">
                        </li>

                        <li>
                            <!-- Campo tipo select, que crea un menú desplegable con las ociones
                -->
                            ¿Qué curso quieres?
                            <label for="curso">Elige uno</label>

                            <select name="curso" id="curso">
                                <option value="">Elige uno...</option>
                                <option value="HTML">HTML</option>
                                <option value="CSS">CSS</option>
                                <!-- Este sería el valor seleccionado por defecto
                -->
                                <option value="JS" selected>JAVASCRIPT</option>
                            </select>
                        </li>
                        <li>
                            <!-- Botón de enviar.
                    Es un input pero no envía valores, 
                    aunque tiene un value que es el texto que se ve en el botón,  
                    y por defecto (si no se pone) es "submit".
                -->
                            <input type="submit" name="Enviar" value="Enviar">

                        </li>
                    </ul>
                </form>
            <?php } ?>
            <scrip>

            
            </scrip>
</body>

</html>