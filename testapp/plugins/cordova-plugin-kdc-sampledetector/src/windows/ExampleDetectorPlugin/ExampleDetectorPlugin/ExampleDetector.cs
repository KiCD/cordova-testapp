using System;
using System.Linq;
using System.Threading.Tasks;
using Windows.Devices.Enumeration.Pnp;

namespace ExampleDetectorPlugin
{
    public sealed class ExampleDetector
    {
        public static string GetPlatform()
        {
            return "windows";
        }
    }
}
