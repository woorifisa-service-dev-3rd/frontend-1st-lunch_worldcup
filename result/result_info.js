import { menu } from './menu.js'; // menu 객체 가져오기.
    const winner = menu.get(localStorage.winner);
    console.log(winner);
    const menuContainer = document.getElementById('menuContainer');
  
    const restaurantDiv = document.createElement('div');
    restaurantDiv.classList.add('restaurant');
  
    const image = document.createElement('img');
    image.src = winner.foodimage;
    image.alt = winner.foodTitle;
    restaurantDiv.appendChild(image);
  
    const title = document.createElement('h2');
    title.textContent = winner.foodTitle;
    title.classList.add('text-container_left', 'margin-top-bottom');
    restaurantDiv.appendChild(title);
    const menuInfo = document.createElement('p');
    menuInfo.textContent = winner.menuInfo;
    menuInfo.classList.add('text-container_left_rgb');
    restaurantDiv.appendChild(menuInfo);
  
    const foodMap = document.createElement('p');
    foodMap.innerHTML = `<i class="fas fa-map"></i> ${winner.foodMap}`; // Font Awesome 아이콘 추가
    foodMap.classList.add('text-container_left');
    restaurantDiv.appendChild(foodMap);
  
    const phone = document.createElement('p');
    phone.innerHTML = `<i class="fa-solid fa-tty"></i> ${winner.phone}`;
    phone.classList.add('text-container_left');
    restaurantDiv.appendChild(phone);
  
    const menuTime = document.createElement('p');
    menuTime.textContent = `Open: ${winner.menuTime}`;
    menuTime.classList.add('text-container_right');
    restaurantDiv.appendChild(menuTime);
  
    if (winner.menuBreakTime) {
      const menuBreakTime = document.createElement('p');
      menuBreakTime.textContent = `Break Time: ${winner.menuBreakTime}`;
      menuBreakTime.classList.add('text-container_right');
      restaurantDiv.appendChild(menuBreakTime);
    }
  
    const menuList = document.createElement('ul');
    menuList.classList.add('menu-items');
  
    winner.menuItems.forEach(menuItem => {
      const listItem = document.createElement('li');
      listItem.textContent = menuItem;
      menuList.appendChild(listItem);
    });


    // 지도 iframe 추가
    const mapFrame = document.createElement('iframe');
    mapFrame.src = winner.foodMapAPI;
    mapFrame.width = "700";
    mapFrame.height = "300";
    mapFrame.style.border = "0";
    mapFrame.allowFullscreen = "";
    mapFrame.loading = "lazy";
    mapFrame.referrerPolicy = "no-referrer-when-downgrade";
    restaurantDiv.appendChild(mapFrame);
  
    // 메뉴 컨테이너에 레스토랑 정보 추가
    menuContainer.appendChild(restaurantDiv);

    restaurantDiv.appendChild(menuList);

    const menuInfoText = document.createElement('p');
    menuInfoText.style.textAlign = 'center'; // 중앙 정렬
    menuInfoText.innerHTML = '<i class="fa-solid fa-bars"></i> 메뉴 정보';
    restaurantDiv.insertBefore(menuInfoText, menuList); // 메뉴 리스트 바로 전에 삽입