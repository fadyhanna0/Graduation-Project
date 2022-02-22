using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Graduation_Project.core.Interfaces
{
    public interface IBaseRepository<T> where T : class
    {
        public T GetById(int id);
        public IEnumerable<T> GetAll();
        public IEnumerable<T> GetAll(Expression<Func<T, bool>> filter, string[] includes = null);

        public T Find(Expression<Func<T, bool>> filter, string[] includes = null);
        public IQueryable<T> Find(string[] includes = null);
        public T Add(T entity);
        public T Update(T entity);
        public void Delete(T entity);
        public IEnumerable<T> AddRange(IEnumerable<T> entities);

        public int Count();



    }
}
