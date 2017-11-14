<template>
  <div class="container">
    <div class="sub-footer">
      <div class="text-center">
        <div class="col-md-12">
          <form class="form-inline">
            <div class="form-group">
              <button type="purchase" name="purchase" class="btn btn-primary btn-lg" required="required">Enter Your Email</button>
            </div>
            <div class="form-group">
              <button type="subscribe" name="subscribe" class="btn btn-primary btn-lg" required="required">Subscribe Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<link rel="stylesheet" href="static/css/bootstrap.min.css">
<style scoped>
</style>
