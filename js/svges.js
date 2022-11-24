"use strict";
// svges for sidebar
const homeSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const profileSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9847 15.3457C8.11707 15.3457 4.81421 15.9305 4.81421 18.2724C4.81421 20.6143 8.09611 21.22 11.9847 21.22C15.8523 21.22 19.1542 20.6343 19.1542 18.2933C19.1542 15.9524 15.8733 15.3457 11.9847 15.3457Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9846 12.0059C14.5227 12.0059 16.5799 9.94779 16.5799 7.40969C16.5799 4.8716 14.5227 2.81445 11.9846 2.81445C9.44655 2.81445 7.38845 4.8716 7.38845 7.40969C7.37988 9.93922 9.42369 11.9973 11.9523 12.0059H11.9846Z" stroke="#130F26" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const financeSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.2779 13.8894C17.9527 13.8894 18.519 14.4462 18.4158 15.1125C17.8106 19.0325 14.4548 21.9431 10.4074 21.9431C5.92952 21.9431 2.30005 18.3136 2.30005 13.8368C2.30005 10.1483 5.10215 6.71255 8.25689 5.9357C8.93479 5.76834 9.62952 6.24518 9.62952 6.94307C9.62952 11.6715 9.78847 12.8947 10.6864 13.5599C11.5843 14.2252 12.64 13.8894 17.2779 13.8894Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.6926 9.9517C21.7463 6.9138 18.0147 2.01696 13.4674 2.10117C13.1137 2.10749 12.8305 2.40222 12.8147 2.75485C12.7 5.25275 12.8547 8.48959 12.9411 9.95696C12.9674 10.4138 13.3263 10.7727 13.7821 10.7991C15.2905 10.8854 18.6453 11.0033 21.1074 10.6306C21.4421 10.5801 21.6874 10.2896 21.6926 9.9517Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const vigetSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0252 19.9749C13.1689 18.1186 12.5702 17.4801 15.0252 15.0251C17.4802 12.5701 18.1186 13.1688 19.9749 15.0251C21.8312 16.8814 22.4576 17.4922 19.9749 19.9749C17.4922 22.4576 16.8815 21.8312 15.0252 19.9749Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const infoSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.334 2.75H7.665C4.644 2.75 2.75 4.889 2.75 7.916V16.084C2.75 19.111 4.635 21.25 7.665 21.25H16.333C19.364 21.25 21.25 19.111 21.25 16.084V7.916C21.25 4.889 19.364 2.75 16.334 2.75Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9946 16V12" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9899 8.2041H11.9999" stroke="#130F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const pinSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const settingSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8067 7.62361L20.1842 6.54352C19.6577 5.6296 18.4907 5.31432 17.5755 5.83872V5.83872C17.1399 6.09534 16.6201 6.16815 16.1307 6.04109C15.6413 5.91402 15.2226 5.59752 14.9668 5.16137C14.8023 4.88415 14.7139 4.56839 14.7105 4.24604V4.24604C14.7254 3.72922 14.5304 3.2284 14.17 2.85767C13.8096 2.48694 13.3145 2.27786 12.7975 2.27808H11.5435C11.037 2.27807 10.5513 2.47991 10.194 2.83895C9.83669 3.19798 9.63717 3.68459 9.63961 4.19112V4.19112C9.6246 5.23693 8.77248 6.07681 7.72657 6.0767C7.40421 6.07336 7.08846 5.98494 6.81123 5.82041V5.82041C5.89606 5.29601 4.72911 5.61129 4.20254 6.52522L3.53435 7.62361C3.00841 8.53639 3.3194 9.70261 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2056 5.18653 11.8891C5.18653 12.5725 4.8219 13.2041 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1454V16.1454L4.16593 17.2346C4.41265 17.6798 4.8266 18.0083 5.31619 18.1474C5.80578 18.2866 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6516 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6717C9.5387 18.9489 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5001 14.7055 20.6491 14.7105 19.5962V19.5962C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6807 16.6236 17.6831C16.9452 17.6917 17.2596 17.7798 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1544 20.1476 17.2438V17.2438L20.8067 16.1454C21.0618 15.7075 21.1318 15.186 21.0012 14.6964C20.8706 14.2067 20.5502 13.7894 20.111 13.5367V13.5367C19.6718 13.284 19.3514 12.8666 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.928C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70289 21.3264 8.54349 20.8067 7.63277V7.63277V7.62361Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12.175" cy="11.8891" r="2.63616" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const logoutSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.98403 7.38948V6.45648C8.98403 4.42148 10.634 2.77148 12.669 2.77148H17.544C19.578 2.77148 21.228 4.42148 21.228 6.45648V17.5865C21.228 19.6215 19.578 21.2715 17.544 21.2715H12.659C10.63 21.2715 8.98403 19.6265 8.98403 17.5975V16.6545" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.19044 12.0215H14.2314" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.1189 9.1062L2.1909 12.0212L5.1189 14.9372" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const chatSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.9393 12.4131H15.9483" stroke="#130F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9303 12.4131H11.9393" stroke="#130F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.92128 12.4131H7.93028" stroke="#130F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const bellSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.3889 20.8572C13.0247 22.3719 10.8967 22.3899 9.51953 20.8572" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const allSidebarSvges = [
  homeSvg,
  profileSvg,
  financeSvg,
  vigetSvg,
  infoSvg,
  pinSvg,
  settingSvg,
  logoutSvg,
  chatSvg,
  bellSvg,
];
// sun and moon svges
const sunSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.75C11.7833 3.75 11.6042 3.67917 11.4625 3.5375C11.3208 3.39583 11.25 3.21667 11.25 3V1.75C11.25 1.53333 11.3208 1.35417 11.4625 1.2125C11.6042 1.07083 11.7833 1 12 1C12.2167 1 12.3958 1.07083 12.5375 1.2125C12.6792 1.35417 12.75 1.53333 12.75 1.75V3C12.75 3.21667 12.6792 3.39583 12.5375 3.5375C12.3958 3.67917 12.2167 3.75 12 3.75ZM12 23C11.7833 23 11.6042 22.9292 11.4625 22.7875C11.3208 22.6458 11.25 22.4667 11.25 22.25V21C11.25 20.7833 11.3208 20.6042 11.4625 20.4625C11.6042 20.3208 11.7833 20.25 12 20.25C12.2167 20.25 12.3958 20.3208 12.5375 20.4625C12.6792 20.6042 12.75 20.7833 12.75 21V22.25C12.75 22.4667 12.6792 22.6458 12.5375 22.7875C12.3958 22.9292 12.2167 23 12 23ZM21 12.75C20.7833 12.75 20.6042 12.6792 20.4625 12.5375C20.3208 12.3958 20.25 12.2167 20.25 12C20.25 11.7833 20.3208 11.6042 20.4625 11.4625C20.6042 11.3208 20.7833 11.25 21 11.25H22.25C22.4667 11.25 22.6458 11.3208 22.7875 11.4625C22.9292 11.6042 23 11.7833 23 12C23 12.2167 22.9292 12.3958 22.7875 12.5375C22.6458 12.6792 22.4667 12.75 22.25 12.75H21ZM1.75 12.75C1.53333 12.75 1.35417 12.6792 1.2125 12.5375C1.07083 12.3958 1 12.2167 1 12C1 11.7833 1.07083 11.6042 1.2125 11.4625C1.35417 11.3208 1.53333 11.25 1.75 11.25H3C3.21667 11.25 3.39583 11.3208 3.5375 11.4625C3.67917 11.6042 3.75 11.7833 3.75 12C3.75 12.2167 3.67917 12.3958 3.5375 12.5375C3.39583 12.6792 3.21667 12.75 3 12.75H1.75ZM18.025 5.95C17.875 5.8 17.8 5.62083 17.8 5.4125C17.8 5.20417 17.875 5.025 18.025 4.875L18.6 4.3C18.7333 4.16667 18.9083 4.09583 19.125 4.0875C19.3417 4.07917 19.525 4.15 19.675 4.3C19.825 4.45 19.9 4.62917 19.9 4.8375C19.9 5.04583 19.825 5.225 19.675 5.375L19.075 5.975C18.9417 6.10833 18.7708 6.175 18.5625 6.175C18.3542 6.175 18.175 6.1 18.025 5.95ZM4.35 19.675C4.2 19.525 4.125 19.3458 4.125 19.1375C4.125 18.9292 4.2 18.75 4.35 18.6L4.925 18.025C5.05833 17.8917 5.23333 17.8208 5.45 17.8125C5.66667 17.8042 5.85 17.875 6 18.025C6.15 18.175 6.225 18.3542 6.225 18.5625C6.225 18.7708 6.15 18.95 6 19.1L5.4 19.7C5.26667 19.8333 5.09583 19.9 4.8875 19.9C4.67917 19.9 4.5 19.825 4.35 19.675ZM18.6 19.675L18 19.1C17.8667 18.9667 17.7958 18.7917 17.7875 18.575C17.7792 18.3583 17.85 18.175 18 18.025C18.15 17.875 18.3292 17.8 18.5375 17.8C18.7458 17.8 18.925 17.875 19.075 18.025L19.675 18.625C19.8083 18.7583 19.8792 18.9292 19.8875 19.1375C19.8958 19.3458 19.825 19.525 19.675 19.675C19.525 19.825 19.3458 19.9 19.1375 19.9C18.9292 19.9 18.75 19.825 18.6 19.675ZM4.925 5.95L4.325 5.375C4.19167 5.24167 4.12083 5.06667 4.1125 4.85C4.10417 4.63333 4.175 4.45 4.325 4.3C4.475 4.15 4.65417 4.075 4.8625 4.075C5.07083 4.075 5.25 4.15 5.4 4.3L6 4.9C6.13333 5.03333 6.20417 5.20417 6.2125 5.4125C6.22083 5.62083 6.15 5.8 6 5.95C5.85 6.1 5.67083 6.175 5.4625 6.175C5.25417 6.175 5.075 6.1 4.925 5.95ZM12 17.625C10.4333 17.625 9.10417 17.0792 8.0125 15.9875C6.92083 14.8958 6.375 13.5667 6.375 12C6.375 10.4333 6.92083 9.10417 8.0125 8.0125C9.10417 6.92083 10.4333 6.375 12 6.375C13.5667 6.375 14.8958 6.92083 15.9875 8.0125C17.0792 9.10417 17.625 10.4333 17.625 12C17.625 13.5667 17.0792 14.8958 15.9875 15.9875C14.8958 17.0792 13.5667 17.625 12 17.625ZM12 16.125C13.15 16.125 14.125 15.725 14.925 14.925C15.725 14.125 16.125 13.15 16.125 12C16.125 10.85 15.725 9.875 14.925 9.075C14.125 8.275 13.15 7.875 12 7.875C10.85 7.875 9.875 8.275 9.075 9.075C8.275 9.875 7.875 10.85 7.875 12C7.875 13.15 8.275 14.125 9.075 14.925C9.875 15.725 10.85 16.125 12 16.125Z" fill="#2496FF"/></svg>';
const moonSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.0001C9.5 21.0001 7.375 20.1251 5.625 18.3751C3.875 16.6251 3 14.5001 3 12.0001C3 9.75011 3.6625 7.84178 4.9875 6.27511C6.3125 4.70844 8.05 3.70011 10.2 3.25011C10.8833 3.11678 11.35 3.23344 11.6 3.60011C11.85 3.96678 11.8417 4.46678 11.575 5.10011C11.425 5.48344 11.3083 5.87511 11.225 6.27511C11.1417 6.67511 11.1 7.08344 11.1 7.50011C11.1 9.00011 11.625 10.2751 12.675 11.3251C13.725 12.3751 15 12.9001 16.5 12.9001C16.9167 12.9001 17.3208 12.8626 17.7125 12.7876C18.1042 12.7126 18.4833 12.6084 18.85 12.4751C19.5667 12.2084 20.1 12.2209 20.45 12.5126C20.8 12.8043 20.8917 13.3001 20.725 14.0001C20.275 16.0168 19.2667 17.6876 17.7 19.0126C16.1333 20.3376 14.2333 21.0001 12 21.0001ZM12 19.5001C13.8167 19.5001 15.4 18.9376 16.75 17.8126C18.1 16.6876 18.9417 15.3668 19.275 13.8501C18.8583 14.0334 18.4125 14.1709 17.9375 14.2626C17.4625 14.3543 16.9833 14.4001 16.5 14.4001C14.5833 14.4001 12.9542 13.7293 11.6125 12.3876C10.2708 11.0459 9.6 9.41678 9.6 7.50011C9.6 7.10011 9.64167 6.67094 9.725 6.21261C9.80833 5.75428 9.95833 5.23344 10.175 4.65011C8.54167 5.10011 7.1875 6.01261 6.1125 7.38761C5.0375 8.76261 4.5 10.3001 4.5 12.0001C4.5 14.0834 5.22917 15.8543 6.6875 17.3126C8.14583 18.7709 9.91667 19.5001 12 19.5001Z" fill="#627384"/></svg>';

// general Svges
const arrowSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 5L15.5 12L8.5 19" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const plusSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12H18" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18L12 6" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const searchSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11.7666" cy="11.7669" r="8.98856" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.0184 18.4854L21.5424 22.0002" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const exitSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 17L7 7" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.00427 17L17.0043 7" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
// last transaction sidebar svges
const convertSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1639 7.16051L6.54614 7.16051" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.0674 3.08273L20.164 7.1605L16.0674 11.2383" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.83301 17.0887H17.4508" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.9287 21.1665L3.83203 17.0887L7.9287 13.0109" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const usersSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.59151 15.2068C13.2805 15.2068 16.4335 15.7658 16.4335 17.9988C16.4335 20.2318 13.3015 20.8068 9.59151 20.8068C5.90151 20.8068 2.74951 20.2528 2.74951 18.0188C2.74951 15.7848 5.88051 15.2068 9.59151 15.2068Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.59157 12.0198C7.16957 12.0198 5.20557 10.0568 5.20557 7.63476C5.20557 5.21276 7.16957 3.24976 9.59157 3.24976C12.0126 3.24976 13.9766 5.21276 13.9766 7.63476C13.9856 10.0478 12.0356 12.0108 9.62257 12.0198H9.59157Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.4832 10.882C18.0842 10.657 19.3172 9.28301 19.3202 7.62001C19.3202 5.98101 18.1252 4.62101 16.5582 4.36401" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5955 14.7322C20.1465 14.9632 21.2295 15.5072 21.2295 16.6272C21.2295 17.3982 20.7195 17.8982 19.8955 18.2112" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const operationSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.79501 7.05589C4.79501 5.80689 5.80701 4.79489 7.05601 4.79389H8.08501C8.68201 4.79389 9.25401 4.55689 9.67801 4.13689L10.397 3.41689C11.278 2.53089 12.71 2.52689 13.596 3.40789L13.597 3.40889L13.606 3.41689L14.326 4.13689C14.75 4.55789 15.322 4.79389 15.919 4.79389H16.947C18.196 4.79389 19.209 5.80589 19.209 7.05589V8.08289C19.209 8.67989 19.445 9.25289 19.866 9.67689L20.586 10.3969C21.472 11.2779 21.477 12.7099 20.596 13.5959L20.595 13.5969L20.586 13.6059L19.866 14.3259C19.445 14.7489 19.209 15.3209 19.209 15.9179V16.9469C19.209 18.1959 18.197 19.2079 16.948 19.2079H16.947H15.917C15.32 19.2079 14.747 19.4449 14.324 19.8659L13.604 20.5849C12.724 21.4709 11.293 21.4759 10.407 20.5969C10.406 20.5959 10.405 20.5949 10.404 20.5939L10.395 20.5849L9.67601 19.8659C9.25301 19.4449 8.68001 19.2089 8.08301 19.2079H7.05601C5.80701 19.2079 4.79501 18.1959 4.79501 16.9469V15.9159C4.79501 15.3189 4.55801 14.7469 4.13701 14.3239L3.41801 13.6039C2.53201 12.7239 2.52701 11.2929 3.40701 10.4069C3.40701 10.4059 3.40801 10.4049 3.40901 10.4039L3.41801 10.3949L4.13701 9.67489C4.55801 9.25089 4.79501 8.67889 4.79501 8.08089V7.05589" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.43164 14.5716L14.5716 9.43164" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.4955 14.5H14.5045" stroke="#130F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.4955 9.5H9.5045" stroke="#130F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const bulbSvg =
  '<svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.12305 20H12.3701" stroke="#19162E" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.595 14.0276L14.1515 14.4522L13.595 14.0276ZM6.89898 14.0276L6.34248 14.4522H6.34248L6.89898 14.0276ZM8.12351 16.792H8.82351H8.12351ZM6.7 11.3506C6.7 9.31842 8.30385 7.7 10.247 7.7V6.3C7.49905 6.3 5.3 8.57721 5.3 11.3506H6.7ZM10.247 7.7C12.1902 7.7 13.794 9.31842 13.794 11.3506H15.194C15.194 8.57721 12.995 6.3 10.247 6.3V7.7ZM13.794 11.3506C13.794 12.2028 13.5111 12.9836 13.0386 13.603L14.1515 14.4522C14.8055 13.5952 15.194 12.5175 15.194 11.3506H13.794ZM7.45547 13.603C6.98289 12.9836 6.7 12.2028 6.7 11.3506H5.3C5.3 12.5175 5.68849 13.5952 6.34248 14.4522L7.45547 13.603ZM11.6627 17.1766H8.83134V18.5766H11.6627V17.1766ZM8.83134 17.1766C8.83106 17.1766 8.83147 17.1766 8.8323 17.1767C8.83309 17.1769 8.83373 17.1771 8.83412 17.1773C8.83482 17.1776 8.83373 17.1773 8.83173 17.1752C8.82972 17.1732 8.82766 17.1702 8.82615 17.1666C8.82481 17.1633 8.82351 17.1586 8.82351 17.1515H7.42351C7.42351 17.9225 8.03801 18.5766 8.83134 18.5766V17.1766ZM11.6705 17.1515C11.6705 17.1586 11.6692 17.1633 11.6679 17.1666C11.6664 17.1702 11.6643 17.1732 11.6623 17.1752C11.6603 17.1773 11.6592 17.1776 11.6599 17.1773C11.6603 17.1771 11.6609 17.1769 11.6617 17.1767C11.6626 17.1766 11.663 17.1766 11.6627 17.1766V18.5766C12.456 18.5766 13.0705 17.9225 13.0705 17.1515H11.6705ZM8.82351 17.1515V16.792H7.42351V17.1515H8.82351ZM11.6705 16.792V17.1515H13.0705V16.792H11.6705ZM6.34248 14.4522C6.96842 15.2725 7.42351 16.0163 7.42351 16.792L8.82351 16.792C8.82351 15.4971 8.0744 14.4141 7.45547 13.603L6.34248 14.4522ZM13.0386 13.603C12.4196 14.4141 11.6705 15.4971 11.6705 16.792H13.0705C13.0705 16.0163 13.5256 15.2725 14.1515 14.4522L13.0386 13.603Z" fill="#19162E"/><path d="M20 8.83784C19.9898 8.09083 19.6355 7.38935 19.038 6.93303L12.4577 1.6853C11.3049 0.771566 9.6662 0.771566 8.51342 1.6853L1.96203 6.94256C1.36226 7.39702 1.00739 8.09967 1 8.84736" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 23.5H20" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// balance section svges
const walletSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6389 14.3962H17.5906C16.1042 14.3953 14.8993 13.1914 14.8984 11.7049C14.8984 10.2185 16.1042 9.01458 17.5906 9.01367H21.6389" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.0485 11.6432H17.7369" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.03564 7.53772H12.4346" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const copySvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4754 6.67725C15.4754 6.67725 9.91978 6.68014 9.91109 6.68014C7.91376 6.69244 6.677 8.00663 6.677 10.0112V16.6661C6.677 18.6808 7.92317 20.0001 9.93787 20.0001C9.93787 20.0001 15.4928 19.9979 15.5022 19.9979C17.4995 19.9856 18.737 18.6707 18.737 16.6661V10.0112C18.737 7.9965 17.4901 6.67725 15.4754 6.67725Z" stroke="#4B5B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.7984 4C12.7984 4 7.24278 4.00289 7.23409 4.00289C5.23676 4.0152 4 5.32939 4 7.33396V13.9889" stroke="#4B5B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const phoneSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18H12.01" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const reloadSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 15.25C13.5858 15.25 13.25 15.5858 13.25 16C13.25 16.4142 13.5858 16.75 14 16.75V15.25ZM19 16H19.75C19.75 15.5858 19.4142 15.25 19 15.25V16ZM18.25 21C18.25 21.4142 18.5858 21.75 19 21.75C19.4142 21.75 19.75 21.4142 19.75 21H18.25ZM14 16.75H19V15.25H14V16.75ZM18.25 16V21H19.75V16H18.25Z" fill="#130F26"/><path d="M4.58252 14.9968C5.1432 16.3846 6.08195 17.5872 7.29206 18.468C8.50217 19.3488 9.93511 19.8725 11.428 19.9795C12.9209 20.0865 14.4139 19.7726 15.7373 19.0734C17.0606 18.3742 18.1613 17.3177 18.9142 16.0241" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 8.75C10.4142 8.75 10.75 8.41421 10.75 8C10.75 7.58579 10.4142 7.25 10 7.25V8.75ZM5 8H4.25C4.25 8.41421 4.58579 8.75 5 8.75V8ZM5.75 3C5.75 2.58579 5.41421 2.25 5 2.25C4.58579 2.25 4.25 2.58579 4.25 3H5.75ZM10 7.25H5V8.75H10V7.25ZM5.75 8V3H4.25V8H5.75Z" fill="#130F26"/><path d="M19.4176 9.00315C18.8569 7.61541 17.9182 6.41278 16.7081 5.53197C15.498 4.65116 14.065 4.12749 12.5721 4.02048C11.0792 3.91346 9.58624 4.2274 8.26287 4.92661C6.9395 5.62582 5.83882 6.68226 5.08594 7.97584" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// main user svgs for drow down list
const editSvg =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7474 20.4428H21" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.78 3.79479C13.5557 2.86779 14.95 2.73186 15.8962 3.49173C15.9485 3.53296 17.6295 4.83879 17.6295 4.83879C18.669 5.46719 18.992 6.80311 18.3494 7.82259C18.3153 7.87718 8.81195 19.7645 8.81195 19.7645C8.49578 20.1589 8.01583 20.3918 7.50291 20.3973L3.86353 20.443L3.04353 16.9723C2.92866 16.4843 3.04353 15.9718 3.3597 15.5773L12.78 3.79479Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.0208 6.00098L16.4731 10.1881" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
// main user drop down icons Array
const userIconsArr = [profileSvg, editSvg, logoutSvg];
