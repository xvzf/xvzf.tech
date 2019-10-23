<template>
  <div id="app">
    <i-layout class="_height-100">
      <i-layout-content class="_display-flex _align-items-center">
        <i-container class="_height-100">
          <i-row center-xs middle-xs class="_height-100">
            <i-column>
              <img src="me.jpeg" class="image" />
              <h1>Matthias Riegler</h1>
              <p>
                Passionate about
                <strong>Open Source</strong>,
                <strong>IPv6</strong>,
                <strong>Kubernetes</strong> and
                <strong>routing more than 10G</strong>
              </p>
              <i-button link variant="dark" href="https://github.com/xvzf">
                <font-awesome-icon :icon="['fab', 'github-alt']" size="lg" />
              </i-button>
              <i-button link variant="dark" href="https://twitter.com/tuxoide">
                <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
              </i-button>
              <i-button
                link
                variant="dark"
                href="https://www.linkedin.com/in/matthias-riegler-364a52b5/"
              >
                <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg" />
              </i-button>
              <i-button link variant="dark" href="mailto:me@xvzf.tech">
                <font-awesome-icon icon="envelope" size="lg" />
              </i-button>
            </i-column>
          </i-row>
        </i-container>
      </i-layout-content>
      <i-layout-footer class="footer">
        <i-container fluid>
          <i-row xs-center>
            <i-column>
              <div style="font-size: 12px;">
                &copy; 2019, 2020 Matthias Riegler,
                <a href="/impressum.html">Impressum</a>
              </div>
            </i-column>
          </i-row>
        </i-container>
      </i-layout-footer>
    </i-layout>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="css">
#app {
  height: 100vh;
}

.image {
  width: 18%;
  height: auto;
  border-radius: 50% !important;
}
</style>