<script>
  import { projects } from "./data";
</script>

<main>
  {#each projects as project}
    <h3>{project.title}</h3>
    <div class="grid">
      {#each project.projs as p}
        <div class="item">
          <h5>{p.title}</h5>
          <p>{p.desc}</p>
          {#each p.links as link}
            <a class="project-link" href={link.link}><i class={"bi bi-" + link.type} /></a>
          {/each}
        </div>
        {/each}
      </div>
  {/each}
</main>

<style>
  .project-link {
    margin: 6px;
    font-size: 24px;
  }
</style>
