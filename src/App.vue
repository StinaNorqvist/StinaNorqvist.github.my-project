<script></script>

<template>
  <ul>
    <li>
      <RouterLink to="/MakeAFishView">Make A Fish </RouterLink>
    </li>
    <li>
      <RouterLink to="/FishListView">Fish List </RouterLink>
    </li>
    <li>
      <RouterLink to="/FishCalculatorView">Fish Calculator </RouterLink>
    </li>
    <li>
      <RouterLink to="/FishStoreView"> Fish Store </RouterLink>
    </li>
    <li>
      <RouterLink to="/PropsView"> Fish Props </RouterLink>
    </li>
  </ul>
  <main>
    <RouterView />
  </main>
</template>
