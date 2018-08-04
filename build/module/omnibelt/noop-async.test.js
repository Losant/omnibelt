const noopAsync = require('./noop-async');
it('should return a promise of undefined', async () => {
    const result = noopAsync();
    expect(result).toBeInstanceOf(Promise);
    expect(await result).toBeUndefined();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9vcC1hc3luYy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L25vb3AtYXN5bmMudGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFMUMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ3BELE1BQU0sTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsTUFBTSxDQUFDLE1BQU0sTUFBTSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUMifQ==