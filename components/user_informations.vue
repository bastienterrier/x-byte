<template>
  <div>
    <ul>
      <li>{{ item.userPseudo }}</li>
      <li>{{ item.userRole }}</li>
      <li>{{ item.userId }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['item'] // item as User
}
</script>
