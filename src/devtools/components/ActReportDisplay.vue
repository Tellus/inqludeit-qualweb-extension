<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-data-table
          :items="metadata"
          :headers="[
            {
              title: 'Outcome',
              key: 'outcome',
            },
            {
              title: 'Count',
              key: 'count'
            }
          ]"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { ACTRulesReport } from '@qualweb/act-rules';

const { report } = defineProps<{ report: ACTRulesReport }>();

const metadata = computed(() =>
  Object.keys(report.metadata)
    .map(k => ({
      outcome: k,
      count: report.metadata[k as keyof typeof report['metadata']],
    }))
);
</script>