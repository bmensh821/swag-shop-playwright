module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'src/utils/world.ts',  // 👈 this is required to register your custom World
      'src/steps/**/*.ts'
    ],
    format: [
      'progress-bar',
      'html:reports/cucumber-report.html'
    ],
    timeout: 20000, // ⏱️ timeout to 20 seconds
    publishQuiet: true
  }
};
