module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'src/support/world.ts',  // 👈 this is required to register your custom World
      'src/steps/**/*.ts'
    ],
    format: [
      'progress-bar',
      'html:reports/cucumber-report.html'
    ],
    publishQuiet: true
  }
};
