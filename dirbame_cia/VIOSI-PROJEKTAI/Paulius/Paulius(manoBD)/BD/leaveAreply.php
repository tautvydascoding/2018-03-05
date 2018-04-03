<!--10.=============LEAVE A REPLY==============-->
<div class="container" style="background-color:transparent">
            <div class="row" style="margin-top:50px">
                <div class="col-md-12 col-sm-12">
                    <div class="panel panel-default">
                        <div class="panel-heading" >
                            <h1>Leave a reply</h1>
                          </div>


  <form action="email.php" method="post">
                    <div class="panel-body">
                        <div class="form-group">
                            <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user blue"></i></span>

                                <input type="text" name="name" placeholder="Name" class="form-control"
                                autofocus="autofocus" required>
<!--Vardas-->
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope blue"></i></span>
<!--PASTAS-->
                                <input type="email" name="pastas" placeholder="El.Pastas" class="form-control" required>

                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-phone blue"></i></span>
<!--ANTRASTE-->
                                <input type="text" name="antraste" placeholder="Tema" class="form-control" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-comment blue"></i></span>
<!--KLAUSIMAS-->
                                <textarea name="klausimas" rows="6" class="form-control" type="text" required> Leave your question..</textarea>
                            </div>
                        </div>
                        <div class="">
                        <button type="submit" class="btn btn-info pull-right">Send <span class="glyphicon glyphicon-send"></span></button>
                            <button type="reset" value="Reset" name="reset" class="btn2">Reset <span class="glyphicon glyphicon-refresh"></span></button>
                        </div>
                    </div>
    </form>


                </div>
            </div>
        </div>
    </div>
<!--10===============LEAVE A REPLY END===============-->
