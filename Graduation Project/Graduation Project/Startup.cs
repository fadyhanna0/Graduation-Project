
using Graduation_Project.core.Interfaces;
using Graduation_Project.core.Models;

using Graduation_Project.EF;
using Graduation_Project.EF.Repositories;
using Graduation_Project.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Graduation_Project
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<Jwt>(Configuration.GetSection("Jwt"));
            services.AddIdentity<ApplicationUser, IdentityRole>().AddEntityFrameworkStores<AppDbContext>();
            services.AddScoped<AuhorizeService, AuhorizeService>();
           
            services.AddDbContext<AppDbContext>(options=>options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
                x=>x.MigrationsAssembly(typeof(AppDbContext).Assembly.FullName)));
            services.AddAuthentication(Options =>
            {
                Options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme; 
                Options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            })
                .AddJwtBearer(O=>
                {
                    O.RequireHttpsMetadata = false;
                    O.SaveToken = false;
                    O.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidIssuer = Configuration["JWT:Issuer"],
                        ValidAudience = Configuration["JWT:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Key"]))
                    };
                });

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Graduation_Project", Version = "v1" });
            });
            //services.AddScoped<IUnitOfWork,UnitOfWork>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Graduation_Project v1"));
            }

            app.UseRouting();
            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
