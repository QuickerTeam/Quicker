

    function fileSelected() {                   //获取上传文件的信息
        var file = document.getElementById('fileToUpload').files[0];
        if (file) {
          var fileSize = 0;
          if (file.size > 1024 * 1024)
            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
          else
            fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';

          document.getElementById('fileName').innerHTML = '选择文件名: ' + file.name;
        };
      };

      // function uploadFile() {                          //上传文件
      //   var fd = new FormData();
      //   fd.append("fileToUpload", document.getElementById('fileToUpload').files[0]);

      //   var xhr = null;
      //     if (window.ActiveXObject) {//如果是IE

      //         xhr = new ActiveXObject("Microsoft.XMLHTTP");

      //      } else if (window.XMLHttpRequest) {

      //          xhr = new XMLHttpRequest(); //实例化一个xhr
      //      }

      //   xhr.upload.addEventListener("progress", uploadProgress, false);
      //   xhr.addEventListener("load", uploadComplete, false);
      //   xhr.addEventListener("error", uploadFailed, false);
      //   xhr.addEventListener("abort", uploadCanceled, false);
      //   xhr.open("POST", "UploadMinimal.aspx");
      //   xhr.send(fd);
      // };

      function uploadProgress(evt) {                         //进度条设置
        if (evt.lengthComputable) {
          var percentComplete = Math.round(evt.loaded * 100 / evt.total);
          document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
        }else {
          document.getElementById('progressNumber').innerHTML = 'unable to compute';
        };
      };

      function uploadComplete(evt) {                                
        $(".suup").slideDown('slow', function() {
        $(this).delay(1000).slideUp('slow');
          });
      };

      function uploadFailed(evt) {
        $(".errup").text("文件上传失败");
       $(".errup").slideDown('slow', function() {
         $(this).delay(1000).slideUp('slow');
       });
      };

      function uploadCanceled(evt) {
        $(".errup").text("文件上传被取消");
       $(".errup").slideDown('slow', function() {
         $(this).delay(1000).slideUp('slow');
       });
      };

$().ready(function(){
  var heigh = $(window).height();  //适应屏幕高度

  $("#fileToUpload").val(null);
  $("#upimg").val(null);
  if (heigh > 470) {
    $(".container").css({
      minHeight:heigh-320
    })
  };


			



$("#upimg").on("change", function(){                  //上传图片同时预览上传的图片
    // Get a reference to the fileList
    var files = !!this.files ? this.files : [];
 
    // If no files were selected, or no FileReader support, return
    if (!files.length || !window.FileReader) return;
 
    // Only proceed if the selected file is an image
    if (/^image/.test( files[0].type)){
 
        // Create a new instance of the FileReader
        var reader = new FileReader();
 
        // Read the local file as  DataURL
        reader.readAsDataURL(files[0]);
 
        // When loaded, set image data as background of div
        
  		  reader.onloadend = function(){
  		$(".addimg").empty();
		$("<img src='"+this.result+"' class = 'imgview'>").appendTo($(".addimg"));  
        };
    }else{
    	 $(".errup").text("请选择图片进行上传");
       		$(".errup").slideDown('slow', function() {
         $(this).delay(1000).slideUp('slow');
       });
    }
 
});


  $("#upviews").click(function(event) {        //上传通知
    var viewname = $(".intitle").val();
    var viewmore = $(".contents").val();
    var isfile,isimg;

    var upfile = new FormData($("#fileToUpload").files[0]);
    var upimg = new FormData($("#upimg").files[0])

    if ($("#fileToUpload").val()) {
    	isfile = true;
    }else{
    	isfile = false;
    };
    if ($("#upimg").val()) {
    	isimg = true;
    }else{
    	isimg = false;
    };




  //   $.ajax({
  //   type:"post",
  //   url:"",
  //   data:{
  //       "title":viewname,
  //       "contents":viewmore,
  //       "imgStatus":isimg,
  //       "fileStatis":isfile,
  //       "imgView":upimg,
  //       "fileView":upfile
  //     },
  //   dataType:"json",
  //   success:function(data){
   
  //       $(".suup").slideDown('slow', function() {
  //       $(this).delay(1000).slideUp('slow');
          
  //       });
  //     return false;
  //   },
  //  error:function(data){
  //      $(".errup").text(data.errMsg.description);
  //      $(".errup").slideDown('slow', function() {
  //        $(this).delay(1000).slideUp('slow');
  //      });
  
  //     }
  // });

        return false;

  });
  $(".hybutton").click(function(event) {
    $('#fileToUpload').trigger('click');
  });

  $(".addimg").click(function(event) {
  	$("#upimg").trigger("click");
  });


});


