<template>
  <section id="timeline" class="timeline-outer">
    <ul class="timeline">
      <li class="event" v-for="n in timeline" :key="n.date" :data-date="n.date">
        <h3 class="small-caps">{{n.title}}</h3>
        <p>{{n.text}}</p>
      </li>
    </ul>
  </section>
</template>
<style>
section.timeline-outer {
  width: 80%;
  margin: 0 auto;
}
.timeline {
  border-left: 8px solid #42A5F5;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  margin: 50px auto;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  padding: 20px;
  list-style: none;
  text-align: left;
}

.timeline h1,
.timeline h2,
.timeline h3 {
  font-size: 1.4em;
}

.timeline .event {
  border-bottom: 1px solid rgba(160, 160, 160, 0.2);
  padding-bottom: 15px;
  margin-bottom: 20px;
  position: relative;
}

.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .event:before {
  left: -177.5px;
  content: attr(data-date);
  text-align: right;  
  font-size: 16px;
  min-width: 120px;
}

.timeline .event:after {
  box-shadow: 0 0 0 8px #42A5F5;
  left: -30px;
  background: #ffffff;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  content: "";
  top: 5px;
}

@media (max-width: 945px) {
  .timeline .event::before {
    left: 0.5px;
    top: -16px;
    min-width: 0;
    font-size: 13px;
  }
  .timeline h3 {
    font-size: 16px;
  }
  .timeline p {
    padding-top: 10px;
  }
  section.lab h3.card-title {
    padding: 5px;
    font-size: 16px
  }
}

@media (max-width: 768px) {
  .timeline .event::before {
    left: 0.5px;
    top: -16px;
    min-width: 0;
    font-size: 13px;
  }
  /* .timeline .event:nth-child(1)::before,
  .timeline .event:nth-child(3)::before,
  .timeline .event:nth-child(5)::before {
    top: 38px;
  } */
  .timeline h3 {
    font-size: 16px;
  }
  .timeline p {
    padding-top: 10px;
  }
}
</style>
<script>
export default {
  props:{
    timeline: {
      type: Array,
      required: true
    }
  }
}
</script>