<template>
  <footer class="app-footer">
    <div class="app-footer__title">Test Task, 2025</div>
    <div class="app-footer__description">
      <a href="tel:518-363-2171" class="app-footer__phone">518-363-2171</a>
      <p class="app-footer__address">91 Park St. Fairhope, AL 36532</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 98px;
  background-color: #292d32;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0 48px;
}

@media screen and (max-width: 510px) {
  .app-footer {
    flex-direction: column;
    padding: 24px 48px;
    align-items: baseline;
    height: 122px;
  }
}

.app-footer__title {
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  color: white;
}

.app-footer__description {
  font-size: 14px;
  font-weight: 500;
  line-height: 16.41px;
  color: white;
}

.app-footer__phone {
  display: block;
  color: white;
  margin-bottom: 4px;
}
</style>
