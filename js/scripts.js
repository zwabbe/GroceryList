$(document).ready(function () {
  $(".onclick").click(function show(nr) 
    {
      document.getElementById("#table1").display = "none";
      document.getElementById("#table2").display = "none";
      document.getElementById("#table3").display = "none";
      document.getElementById("#table" + nr).displayToggle = "block";
    }
);
});
