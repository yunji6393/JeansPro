/* 글 작성 여부 확인 */
$(document).ready(function() {
    $("#save").click(function() {

        const board4_title_check = $('#board4_title').val();
        const board4_content_check = $('#board4_content').html();

        if(board4_title_check === "" || board4_title_check === null){
            alert("제목을 작성해주세요");
            return false;
        } else if (board4_content_check === "" || board4_content_check === null) {
            alert("내용을 작성해주세요");
            return false;
        } else{
            if (confirm("저장하시겠습니까?")) {
                $("form").submit();
            } else {
                return false;
            }
        }
    });
});

/* 글 작성 (사진 첨부) */
document.addEventListener("DOMContentLoaded", function() {
  const saveButton = document.querySelector('#save');
  if (saveButton) {
    saveButton.addEventListener('click', function() {
      var board4_content = document.querySelector('#board4_content').innerHTML;
      var hiddenInput = document.createElement('input');
      var form = document.querySelector('form');
      hiddenInput.type = 'hidden';
      hiddenInput.name = 'board4_content';
      hiddenInput.value = board4_content;
      form.appendChild(hiddenInput);
    });
  } else {
    console.error("업로드 실패");
  }

  $('.content-file').click(function() {
    $('#photo-input').trigger('click');
  });

  const photoInput = document.getElementById('photo-input');
  const previewContainer = document.querySelector('#board4_content');

  if (photoInput && previewContainer) {
    photoInput.addEventListener('change', function(event) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = function(e) {
            const imageSrc = e.target.result;
            createPreviewImage(imageSrc);
          };
          reader.readAsDataURL(file);
        }
      }
    });
  }

  function createPreviewImage(imageSrc) {
    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.classList.add('preview-image');
    previewContainer.appendChild(imageElement);
  }
});