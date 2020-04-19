<template>
  <a
    class="repo-link"
    :href="repo.html_url"
    target="_blank"
    rel="noreferrer noopener"
  >
    <div class="repo-card -shadow">
      <h4 class="title">{{ repoName }}</h4>
      <div class="grid-2">
        <BaseIcon name="users">{{
          repo.private ? 'Private' : 'Public'
        }}</BaseIcon>
        <span style="font-size: 0.9rem"> Updated: {{ repoUpdatedDate }} </span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'RepoItem',
  props: {
    repo: Object
  },
  computed: {
    repoName() {
      return this.repo.full_name.split('/')[1]
    },
    repoUpdatedDate() {
      const repoDate = new Date(this.repo.updated_at)
      const displayDate = ` ${repoDate.getFullYear()}-${repoDate.getMonth() +
        1}-${repoDate.getDate()} `
      return displayDate
    }
  }
}
</script>

<style lang="scss" scoped>
.repo-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.repo-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.repo-card > .title {
  margin: 0;
}

.repo-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
