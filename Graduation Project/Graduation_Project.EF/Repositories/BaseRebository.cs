using Graduation_Project.core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Graduation_Project.EF.Repositories
{
    public class BaseRebository<T> : IBaseRepository<T> where T : class
    {
        protected AppDbContext _context;
        public BaseRebository(AppDbContext context)
        {
            _context = context;
        }
       public T GetById(int id)=> _context.Set<T>().Find(id);
        public IEnumerable<T> GetAll()=>  _context.Set<T>().ToList();
        public IEnumerable<T> GetAll(Expression<Func<T, bool>> filter, string[] includes = null)
           {
            IQueryable<T> query = _context.Set<T>();
            if (includes != null)
                foreach (var item in includes)
                    query = query.Include(item);
            return query.Where(filter).ToList();
        }

    public T Find(Expression<Func<T,bool>>filter,string[] includes=null )
        {
            IQueryable<T> query=_context.Set<T>();
            if (includes != null)
                foreach (var item in includes)
                    query = query.Include(item);
            return query.FirstOrDefault(filter);
        }
        //Add method
        public T Add(T entity)
        {
            _context.Set<T>().Add(entity);
            return entity;
        }
        //update method
        public T Update(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            return entity;

        }
        //delete method
        public void Delete(T entity)
        {
            _context.Set<T>().Remove(entity);
        }
        public IEnumerable<T> AddRange(IEnumerable<T> entities)
        {
            _context.Set<T>().AddRange(entities);
            return entities;
        }
        //count method
        public int Count()
        {
            return _context.Set<T>().Count();
        }
    }
}
