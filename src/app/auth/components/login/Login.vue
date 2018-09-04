<template>
  <div class="login">
    <h2>{{'auth.welcome' | translate}}</h2>
    <form method="post" @submit.prevent="login(user)" action="/auth/login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input v-model="user.email" type="text" id="email" required="required"/>
          <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input v-model="user.password" type="password" id="password" required="required"/>
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit">
          {{'auth.login' | translate}}
        </button>
        <router-link class='link' :to="{name: 'signup'}">{{'auth.createAccount' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>
<script>
export default {
    name: "login",

    data() {
        return {
            user: {
                email: "",
                password: ""
            }
        }
    },

    methods: {
        login(user) {
            return this.$store.dispatch("login", user).then(() => {
                this.$store
                    .dispatch("getUser")
                    .then(() => this.$router.push({ name: "dashboard" }))
            })
        }
    }
}
</script>

<style lang="scss">
.login {
    @include media-breakpoint-down(md) {
        width: 100%;
        padding-right: 2rem;
        padding-left: 2rem;
        .down-container {
            .link {
                margin-top: 2rem;
            }
        }
    }

    h2 {
        text-align: center;
    }
    width: 21.375rem;

    .down-container {
        margin-top: 3.125rem;
    }
}
</style>
