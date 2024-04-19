default:
  @just --list

# 
cv:
  @cp cv/cv.pdf src/assets/pdf/AlbertoMH_CV.pdf
  @rm cv/cv.aux \
     cv/cv.log \
     cv/cv.out \
     cv/cv.synctex.gz \
     || true

