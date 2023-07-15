import { artistas } from './top10.js';

  function crearCard(nombre, cancion, urlImg, urlCancion) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-1-3', 'remove-gutter-xs');
  
    const mediaFeaturedDiv = document.createElement('div');
    mediaFeaturedDiv.classList.add('media-featured');
  
    const featuredImageDiv = document.createElement('div');
    featuredImageDiv.classList.add('featured-image', 'featured-image-1');
  
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
  
    const tabNameDiv = document.createElement('div');
    tabNameDiv.classList.add('tab-name');
    tabNameDiv.textContent = nombre;
  
    tabDiv.appendChild(tabNameDiv);
  
    const img = document.createElement('img');

    img.alt = 'featured 1';
  
    featuredImageDiv.appendChild(tabDiv);
    featuredImageDiv.appendChild(img);
  
    const mediaBodyDiv = document.createElement('div');
    mediaBodyDiv.classList.add('media-body');
  
    const h4 = document.createElement('h4');
    h4.classList.add('media-heading');
    h4.textContent = nombre;
  
    const p = document.createElement('p');
    p.textContent = cancion;
  
    const a = document.createElement('a');
    a.classList.add('btn');
    a.href = urlCancion;
    a.textContent = 'Ver más...';
  
    mediaBodyDiv.appendChild(h4);
    mediaBodyDiv.appendChild(p);
    mediaBodyDiv.appendChild(a);
  
    mediaFeaturedDiv.appendChild(featuredImageDiv);
    mediaFeaturedDiv.appendChild(mediaBodyDiv);
  
    colDiv.appendChild(mediaFeaturedDiv);
  
    return colDiv;
  }
  
  
  const contenedor = document.getElementById('append');
  
  artistas.forEach((artista) => {
    const card = crearCard(artista.nombre, artista.cancion, artista.urlImg, artista.urlCancion);
    contenedor.appendChild(card);
  });
  